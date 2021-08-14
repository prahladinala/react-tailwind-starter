import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="m-8 container">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={logo} alt="React Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-blue-450">You have a new message!</p>
        </div>
      </div>
      <TailwindCSSButton>
        Tailwind CSS
      </TailwindCSSButton>
    </div>
  );
}

function TailwindCSSButton(props) {
  return (
    <a href={props.href} className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 inline-block">
      {props.children}
    </a>
  )
}

export default App;
