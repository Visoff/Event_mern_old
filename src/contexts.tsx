const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
    const [frame, setframe] = useState('Initial value');
  
    return (
      <MyContext.Provider value={{ frame, setframe }}>
        {children}
      </MyContext.Provider>
    );
  };