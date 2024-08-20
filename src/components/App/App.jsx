import "./App.css";
import Instructions from "../Instructions/Instructions.jsx";

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "test grinning face",
  },
  {
    emoji: "🎉",
    name: "party popper",
  },
  {
    emoji: "💃",
    name: "woman dancing",
  },
];

/* 
La expresión displayAction && utiliza el operador lógico AND (&&). En javaScript, este operador evalúa la expresión y devuelve la expresión
de la derecha (<p>I am writing JSX</p>). Si displayAction es false, la expresión completa se evalúa como false y no se renderiza nada.

role = "img" :
Proposito --> El atributo role se utiliza para definir el rol del elemento en el contexto de accesibilidad. En este caso, role="img" indica
que este span debe ser tratado como una imagen.

Importancia --> Esto es útil para tecnologías de asitencia, como lectores de pantalla, que necesitan saber cómo interpretar el contenido
del span.

aria-label = {emoji.name} :
Propósito --> El atributo aria-label proporciona una etiqueta accesible para el elemento. En este caso, aria-label={emoji.name} asigna
el nombre del emoji como la etiqueta.

Importancia --> Esto permite que los lectores de pantalla describan el emoji de manera comprensible para los usuarios con discapacidades
visuales. Por ejemplo, en lugar de leer "😀", el lector de pantalla dirá "test grinning face".

id = {emoji.name} :
Proposito --> El atributo id se utiliza para definir un identificador unico para el elemento. En este caso, id={emoji.name} asigna el
nombre del emoji como el identificador.

Importancia --> Esto es útil para identificar el elemento en el DOM, especialmente cuando se necesita interactuar con él mediante
JavaScript, como el evento onClick.
*/

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="container">
      <h1 id={greeting}>Hello World</h1>
      {displayAction && <p>I am writing JSX</p>}
      <Instructions />
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji.name}>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
