import {Component} from 'react';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    name: 'Landon',
                    id: '1'
                }, {
                    name: 'Marissa',
                    id: '2'
                }, {
                    name: 'Andrea',
                    id: '3'
                }, {
                    name: 'Jacky',
                    id: '4'
                }
            ]

        };
    }
    render() {
        return (
            <div className="App">
                {this
                    .state
                    .monsters
                    .map((monster) => {
                        return <div key={monster.id}><h1>{monster.name}</h1></div>
                    })}
            </div>
        );
    }

}

export default App;
