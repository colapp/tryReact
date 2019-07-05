

// ---------hello world-----------
// let name = 'haodf';
// let element = <h1>hello,{name}</h1>;
//
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
//---------------------------------


//----------表达式----------------
// function formatName(user) {
//     return user.firstName + user.lastName;
// }
// const user = {
//     firstName: 'hao',
//     lastName: 'df'
// };
// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
//------------------------------------

/*
 * Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
 * React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
 */
    // 注意：这是简化过的结构
    // const element = {
    //   type: 'h1',
    //   props: {
    //     className: 'greeting',
    //     children: 'Hello, world!'
    //   }
    // };
//-----------------------------------------------------------------------------------------

//--------------------------元素渲染--------------------------------------------------------
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);
//--------------------------------------------------------------------------------------------


//---------------------------组件 && props-----------------------------------------------------
/*
 * 函数组件
 * 它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。
 * 注意： 组件名称必须以大写字母开头。
 */
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//组合组件
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
//class组件
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// const element = App(); //等同于<App />
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

//  !!!React 组件都必须像纯函数一样保护它们的 props 不被更改。(单向数据流)
//----------------------------------------------------------------------------------------------

//-----------------------state && 生命周期--------------------------------------------------------
/*
 * 理解state
 * State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
 * 重点！！！私有的
 * 类似Vue中的Data
 */
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//     //componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//     //当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（umount）”。
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     //使用 this.setState() 来时刻更新组件 state
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );
/*
 * 现在 Clock 组件被定义为 class，而不是函数。
 * 每次组件更新时 render 方法都会被调用，但只要在相同的 DOM 节点中渲染 <Clock />,就仅有一个 Clock 组件的 class 实例被创建使用。
 * 这就使得我们可以使用如 state 或生命周期方法等很多其他特性
 */

 // 关于 setState() 你应该了解三件事：
 // 1.不要直接修改 State,构造函数是唯一可以给 this.state 赋值的地方
 // 2.State 的更新可能是异步的.(暂时没搞懂)
 // 3.State 的更新会被合并
//----------------------------------------------------------------------------------------------------------------


//---------------------------------------事件处理-------------------------------------------------------------------
// 结论： react的事件处理机制很恶心。VUE v-on绑定真是舒服。
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//
//         // 为了在回调中使用 `this`，这个绑定是必不可少的
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(id) {
//         console.log(id);
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick.bind(this,3333)}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );

//传参的参数
//<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
//-----------------------------------------------------------------------------------------------------------------

//------------------------------------------条件渲染-----------------------------------------------------------------
// 结论： react条件渲染很恶心，没有Vue方便。v-if真是舒服。
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }
//
// //用户欢迎语
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// //访客欢迎语
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// //用于条件判断props，展示那个欢迎语
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
//
// //登录按钮组件
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             登录
//         </button>
//     );
// }
// //注销按钮组件
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             注销
//         </button>
//     );
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );


//阻止渲染 <WarningBanner warn={this.state.showWarning} />
//------------------------------------------------------------------------------------------------------------------


//--------------------------------------------列表 & Key-------------------------------------------------------------
//react太恶心，不想再往下尝试了！
//END







