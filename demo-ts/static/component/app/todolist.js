import React from 'react';

class TodoList extends React.Component{

    render = () => {
        const { list } = this.props;
        console.log(`list=================list===========`, list);
        return (
            <ul>
                {
                    list.map((item, idx) => {
                        return <li className={`do-${item.st}`} key={idx}><span>&#x2665;</span>{item.txt}</li>
                    })
                }
            </ul>
        );
    }
}

export default TodoList;
// 函数式组件

// 只需return
// 同一个页面内声明以及使用，即只需要一个文件。
// 组件中调用props相关的参数或函数时，都不能用 this.props. ，需替换成 props.

// export default function Todo(props){
//     const list = props;
//     console.log(list);
//     return (
//         <ul>
//             {
//                 list.map((item, idx) => {
//                     return <li className={`do-${item.st}`} key={idx}>{item.txt}</li>
//                 })
//             }
//         </ul>
//     );
// };
