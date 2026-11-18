import { useState } from 'react';
import './index.css';

export default function App() {
  const [etape, setEtape] = useState('question');
  const [tailleNon, setTailleNon] = useState(1);
  const [tailleOui, setTailleOui] = useState(1);
  const [positionNon, setPositionNon] = useState({ x: 0, y: 0 });
  const [clicsNon, setClicsNon] = useState(0);

  const gererClicNon = () => {
    setClicsNon((prev) => prev + 1);
    setTailleNon((prev) => Math.max(0.2, prev - 0.15));
    setTailleOui((prev) => prev + 0.2);

    const randomX = Math.floor(Math.random() * 160) - 80;
    const randomY = Math.floor(Math.random() * 160) - 80;
    setPositionNon({ x: randomX, y: randomY });
  };

  const messagesRefus = [
    "Voulez-vous m'ouvrir ? 💌",
    "Tu es sûre ? 🥺",
    "Réfléchis bien... 😢",
    "Allez, clique sur Oui ! ❤️",
    "Le bouton Non est en grève ! 😂",
    "Tu n'as plus le choix maintenant 😍"
  ];

  const titreActuel = messagesRefus[Math.min(clicsNon, messagesRefus.length - 1)];

  return (
    <div className="container">
      {etape === 'question' && (
        <div className="card question-card">
          <div className="enveloppe-icon">💌</div>
          <h1>{titreActuel}</h1>
          <p className="sous-titre">J'ai un message très spécial pour toi...</p>

          <div className="boutons-container">
            <button
              className="btn btn-oui"
              style={{ transform: `scale(${tailleOui})` }}
              onClick={() => setEtape('lettre')}
            >
              Oui 💖
            </button>

            <button
              className="btn btn-non"
              style={{
                transform: `translate(${positionNon.x}px, ${positionNon.y}px) scale(${tailleNon})`,
              }}
              onClick={gererClicNon}
            >
              Non
            </button>
          </div>
        </div>
      )}

      {etape === 'lettre' && (
        <div className="card lettre-card fade-in">
          <h2>À ma petite sorcière 🧙‍♀️❤️</h2>
          
          <div className="lettre-contenu">
            <p>Joyeux anniversaire, pépite. ❤️</p>
            <p>
              En ce jour si particulier, j’aimerais prendre un instant pour te dire quelque chose que je ne trouve peut-être pas toujours les mots justes pour exprimer.
            </p>
            <p>
              Lorsque je t’ai connue, je ne pensais pas forcément qu’un jour j’aurais autant envie de partager des moments de ma vie avec toi. Je ne savais pas que cette rencontre allait progressivement faire naître en moi autant d’affection, d’admiration et cette belle envie de découvrir davantage la personne que tu es.
            </p>
            <p>
              C’est assez particulier de réaliser qu’une personne que l’on connaissait à peine peut, en si peu de temps, devenir quelqu’un dont on souhaite sincèrement prendre soin, voir sourire, accompagner et rendre heureuse.
            </p>
            <p>
              Je sais que notre histoire est encore jeune, que nous avons encore beaucoup à apprendre l’un de l’autre, beaucoup de choses à découvrir et tant de souvenirs à construire. Mais s’il y a une chose que je sais aujourd’hui, c’est que l’idée de continuer à avancer à tes côtés, de traverser les différentes saisons de la vie avec toi et de découvrir ce que les années peuvent nous réserver me plaît énormément.
            </p>
            <p>
              J’aimerais apprendre à te connaître davantage, comprendre tes silences, célébrer tes réussites, t’encourager dans tes moments de doute et être présent dans les petits comme dans les grands moments. J’aimerais que tu puisses toujours te sentir appréciée, respectée, écoutée et surtout aimée pour la personne que tu es.
            </p>
            <p>
              En cette nouvelle année de ta vie, je te souhaite une multitude de raisons de sourire, la force de réaliser tes rêves, la paix dans ton cœur, de belles opportunités et tout le bonheur que tu mérites. Ne doute jamais de ta valeur, car tu es une personne qui mérite de belles choses.
            </p>
            <p>
              Merci d’être entrée dans ma vie et de me permettre de découvrir cette belle personne que tu es. Je ne sais pas exactement ce que l’avenir nous réserve, mais je sais que j’aimerais avoir encore beaucoup de pages à écrire avec toi.
            </p>
            <p className="signature">Joyeux anniversaire, ma belle. Que cette journée soit aussi belle que la personne que tu es. Je t’aime tellement petite princesse ❤️</p>
          </div>
        </div>
      )}
    </div>
  );
}