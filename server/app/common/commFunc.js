'use strict';
const util = require('util')
const datetime = require('silly-datetime');
// const isEqual =  require('lodash/isEqual')

function assemble_args(args, field_list, require_list, is_not_strict) {
  let kwargs = {}
  let key_list = [];
  const current = new Date();
  const begin = new Date(datetime.format(current, 'YYYY-MM-DD' + ' 00:00:00'));
  for (let field_name of field_list) {
    let has_key = (args[field_name] !== undefined)
    if (!is_not_strict) {
      has_key = has_key && (args[field_name] !== '')
    }
    let key = field_name
    if (has_key) {
      let value = args[field_name]
      if (typeof value === 'string') {
        value = value.trim()
      }
      if (field_name == 'id' || field_name == 'granularity' || field_name == 'orderStatus' || field_name == 'tradeStatus') {
        value = parseInt(value)
      } else if (field_name == 'startDate' || field_name == 'endDate') {
        value = +new Date(parseInt(value));
        if (!isNaN(value) && value <= current) {
          value = datetime.format(value);
        } else {
          if (field_name == 'startDate') {
            value = datetime.format(begin);
          } else {
            value = datetime.format(current)
          }
        }
      }
      key_list.push(field_name)
      kwargs[key] = value
    }
  }


  if (require_list && require_list.length) {
    let lack_params = []
    for (let k of require_list) {
      if (key_list.indexOf(k) == -1) {
        if (k == 'startDate') {
          kwargs.startDate = datetime.format(begin);
        } else if (k == 'endDate') {
          kwargs.endDate = datetime.format(current);
        } else {
          lack_params.push(k)
        }
      }
    }
    if (lack_params.length) {
      let err_msg = util.format('lack params:%s', lack_params.toString())
      throw err_msg
    }
  }

  return kwargs

}
function underscoreToCamel(value) {
  return value.toLowerCase().replace(/_([a-zA-Z])/g, function (g) { 
    return g[1].toUpperCase(); });
}
function parseObjKey(obj) {
  var after = {};
  for(const key in obj) {
    after[underscoreToCamel(key)] = obj[key];
  }
  return after;
}

function CamelToUnderscore(value) {
  return value = value.replace(/([A-Z])/g,"_$1").toUpperCase();
}

function parseDbKey(obj) {
  var after = {};
  for(const key in obj) {
    after[CamelToUnderscore(key)] = obj[key];
  }
  return after;
}
// function trans_int_field(args, field_list){
//   for(let k of field_list){
//     if(args.hasOwnProperty(k)){
//       let v = args[k]
//       if(v == "true"){
//         v = 1
//       }
//       else if(v == "false"){
//         v = 0
//       }
//       try{
//         args[k] = parseInt(v)
//       }
//       catch(error){
//         args[k] = v
//       }      
//     }
//   }
// }


// function goto_err(ret, err_msg){
//     ret.success = false;
//     ret.msg = err_msg
//     return ret
// }

// function simple_diff(old_value, new_value){
//     old_value = Object.assign({}, old_value)
//     new_value = Object.assign({}, new_value)

//     for(let k in old_value){
//         if(['operate_time'].indexOf(k) != -1){
//             delete old_value[k]
//             delete new_value[k]
//             continue
//         }

//         if(isEqual(old_value[k], new_value[k])){
//             if(['id', 'name'].indexOf(k) == -1){
//                 delete old_value[k]
//                 delete new_value[k]
//             }
//         }

//     }   

//     old_value = JSON.stringify(old_value)
//     new_value = JSON.stringify(new_value)
//     return [old_value,new_value]
// }


// const OBJ_TYPE_DICT = {
//     audit_history:1,
//     source_book:2,
//     board_lightbox:3,
//     board_other:4,
//     book:5,
//     chapter:6,
//     main_book:7,
//     main_chapter:8,
//     board:9,
//     page:10,
//     site:11,
//     type:12,
//     user:13,
//     source_type:14,
//     reject_reason:15,
// }

// function* write_log(user_id, obj, obj_type, old_value, new_value, desc){

//     let obj_id = obj.id
//     let obj_name = obj.name || obj.title || ''+obj_id
//     if(typeof obj_type === "string"){
//         obj_type = OBJ_TYPE_DICT[obj_type] || 0
//     }

//     if(typeof old_value === "object"){
//         old_value = JSON.stringify(old_value)
//     }

//     if(typeof new_value === "object"){
//         new_value = JSON.stringify(new_value)
//     }

//     let ip = this.req.headers['x-forwarded-for'] || this.req.connection.remoteAddress;
//     let login_name = this.session && this.session.user ? this.session.user.login : null;

//     user_id = yield this.service.db.User.findOne({
//         where:{login_name:login_name}
//     }).then(function (res) {
//         return res ? res.id : null
//     })

//     yield this.service.db.OperateLog.create({
//                     user_id:user_id,
//                     object_type:obj_type,
//                     object_id:obj_id,
//                     object_name:obj_name,
//                     ip:ip,
//                     old_value:old_value,
//                     new_value:new_value,
//                     description:desc})

// }


// function* update_instance(ins, update_args, op_type=0, is_log=true) {
//     if(!ins){
//         return
//     }
//     let obj_name = ins.Model.getTableName()
//     if(!op_type){

//         //更新
//         let old_obj = Object.assign({}, ins.toJSON())
//         update_args.operate_time = new Date()
//         yield ins.update(update_args)
//         yield ins.reload()
//         let new_obj = Object.assign({}, ins.toJSON())

//         if(is_log){
//             let diff_data = simple_diff(old_obj, new_obj)
//             yield write_log.call(this, null, new_obj, obj_name, diff_data[0], diff_data[1], `update ${obj_name}`);
//         }
//     }

//     else if(op_type == 1){
//         //新建
//         let new_obj = ins.toJSON()
//         if(is_log){
//             yield write_log.call(this, null, new_obj, obj_name, null, new_obj, `create ${obj_name}`);
//         }

//     }
//     else{
//         //删除
//         let new_obj = ins.toJSON()
//         if(is_log){
//             yield write_log.call(this, null, new_obj, obj_name, new_obj, null, `delete ${obj_name}`);
//         }
//     }
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }


// function createHexRandom (code_length=16){
//     let num = '';
//     for (let i = 0; i <= code_length-1; i++)
//     {
//         var tmp = Math.ceil(Math.random()*15); 
//         if(tmp > 9){
//            switch(tmp){  
//                case(10):
//                    num+='a';
//                    break; 
//                case(11):
//                    num+='b';
//                    break;
//                case(12):
//                    num+='c';
//                    break;
//                case(13):
//                    num+='d';
//                    break;
//                case(14):
//                    num+='e';
//                    break;
//                case(15):
//                    num+='f';
//                    break;
//            } 
//         }
//         else{
//            num+=tmp;
//         }
//     }
//     return num
// }


module.exports = {
  // createHexRandom:createHexRandom,
  // write_log:write_log,
  // getRandomInt:getRandomInt,
  // update_instance:update_instance,
  // OBJ_TYPE_DICT:OBJ_TYPE_DICT,
  // simple_diff:simple_diff,
  // goto_err:goto_err,
  // isEqual:isEqual,
  assemble_args: assemble_args,
  underscoreToCamel: underscoreToCamel,
  parseObjKey,
  parseDbKey,
  // trans_int_field:trans_int_field,
}






