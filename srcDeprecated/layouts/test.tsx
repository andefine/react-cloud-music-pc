import React from 'react'

// type Props = {
//   message: string
// }

// const App = ({ message }: Props) => (
//   <div>{message}</div>
// )

// const App: React.FC<Props> = ({ message }) => (
//   <div>{message}</div>
// )

// type Props = {
//   message: string
// }

// type State = {
//   count: number
// }

// class App extends React.Component<{ message: string }, { count: number }> {
//   state = {
//     count: 0,
//   }

//   increment = (amt: number) => {
//     this.setState((state) => ({
//       count: state.count + amt
//     }))
//   }
  
//   render() {
//     const { count } = this.state
//     return (
//       <div></div>
//     )
//   }
// }

// class App extends React.Component<{
//   message: string
// }> {
//   pointer: number = 3;

//   componentDidMount() {

//   }
// }

type Props = { age: number } & typeof defaultProps
const defaultProps = {
  who: 'shgi fhdo'
}

const Greet = (props: Props) => 
