import './index.css'
import TwitterFollow from './components/TwitterFollow'
import { useState } from 'react';
function App() {
    const [name, setName] = useState('dani')
    return (
        <section>

            <TwitterFollow username='dani' name={name} initialIsFollowing={true}>dani</TwitterFollow>
            <TwitterFollow username='daniela' name="daniela" >Daniela Benz</TwitterFollow>
            <TwitterFollow username='javier' name="javier" >Javier Mas</TwitterFollow>
            <button className='change' onClick={() => setName("Usuario")}>Cambiar</button>
        </section>
    )
}
export default App