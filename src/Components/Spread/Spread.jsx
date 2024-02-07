


const persona = {
    nombre: 'mateo',
    edad: 20,
    sexo: 'masculino'
  }
  
  const persona2 = {
    apellido: 'lohezic',
    ...persona
  } // { apellido:'lohezic', nombre: 'mateo', edad:20, sexo: 'masculino' }
  
  const nombres = [ 'javier', 'mateo']
  
  const nombres2 = [ 'sofia', ...nombres] // [ 'sofia', 'javier', 'mateo']
  
  const arrayTextos ={
    titulo: 'titulo 1',
    subtitulo:'subtitulo 1',
    descripcion: 'descripcion 1'
  }

  const Componente = ({ titulo, subtitulo, descripcion }) => {
    <div>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <p>{descripcion}</p>
    </div>
  }
  
  <Componente {...arrayTextos} />