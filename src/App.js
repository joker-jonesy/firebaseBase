import React from 'react';
import './App.css';
import fire from './fire';
import TextField from '@material-ui/core/TextField';

function App() {

    const [posts, updatePosts] = React.useState([]);

    const [values, setValues] = React.useState({
        name: 'Luke',
        subName:'Jones'
    });

    let db = fire.firestore();

    React.useEffect(() => {

        let newPosts = [];
        
        function handleStatusChange(status) {
            updatePosts(status)
        }

        const unsubscribe = db.collection("posts").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                newPosts.push(doc.data());
            });

            handleStatusChange(newPosts);
        });


        return ()=> unsubscribe;


    });

    const submit = ()=>{
        db.collection("posts").add(values);
        setValues({name:'', subName:'' })
    };

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    let postList = posts.map((pst, idx)=>
        <div key={idx}>
            <h1>{pst.name}</h1>
            <p>{pst.text}</p>
        </div>
    );

    let condition;

    if(values.name==='Luke'){
        condition=false;
    }else{
        condition=true;
    }

    return (
        <div className="App">
            {postList}
            <TextField
                id="standard-basic"
                label="Name"
                margin="normal"
                onChange={handleChange('name')}
                error={condition}
            />
            <TextField
                id="standard-basic"
                label="SubHead"
                margin="normal"
                onChange={handleChange('subName')}
            />
            {values.name}
            {values.subName}
        </div>
    );
}

export default App;
