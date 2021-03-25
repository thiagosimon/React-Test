import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTech } from '../../store/modules/techs/actions';


export default function TechList() {
  const dispatch = useDispatch()
  const [newTech,setNewTech] = useState();

  function handleAddTech() {
    dispatch(addTech(newTech))
    setNewTech('')
  }

  const techs = useSelector(state => state.techs)

  return (
    <>
    <ul data-testid="tech-list">
      {techs.map(tech => <li key={tech}>{tech}</li>)}
    </ul>
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)}/>
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
    </>
  );
}



/* local storage
export default function TechList() {
  const [techs,setTechs] = useState([]);
  const [newTech,setNewTech] = useState();

  useEffect(() => {
      const savedTechs = localStorage.getItem('techs');

      if(savedTechs) {
        setTechs(JSON.parse(savedTechs))
      }
  },[])

  useEffect(() => {
      localStorage.setItem('techs', JSON.stringify(techs))
  },[techs])


  function handleAddTech() {
    setTechs([...techs, newTech])
    setNewTech('')
  }

  return (
    <>
    <ul data-testid="tech-list">
      {techs.map(tech => <li key={tech}>{tech}</li>)}
    </ul>
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)}/>
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
    </>
  );
}

*/