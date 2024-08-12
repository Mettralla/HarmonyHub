import SongForm from "./SongForm";

/**
 * Componente que renderiza un formulario para agregar una nueva canción.
 * 
 * @returns {JSX.Element} 
 */
function NewSong() {
  return (
    <div className="section">
      <SongForm />
    </div>
  )
}

export default NewSong;