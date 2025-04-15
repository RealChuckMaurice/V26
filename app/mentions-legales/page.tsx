export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

      <div className="prose max-w-none">
        <h2>Éditeur du site</h2>
        <p>
          Le site polyptyque.com est édité par [Nom de l'entreprise], [forme juridique] au capital de [montant] euros,
          immatriculée au Registre du Commerce et des Sociétés de [ville] sous le numéro [numéro RCS].
        </p>
        <p>Siège social : [adresse complète]</p>
        <p>Numéro de téléphone : [numéro]</p>
        <p>Email : [adresse email]</p>
        <p>Directeur de la publication : [nom du directeur]</p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par [nom de l'hébergeur], [forme juridique], dont le siège social est situé [adresse de
          l'hébergeur].
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos,
          sons, plans, logos, marques, etc.) est la propriété exclusive de [Nom de l'entreprise] ou de ses partenaires.
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du
          site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de [Nom
          de l'entreprise].
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à [finalité du
          traitement]. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement
          européen n°2016/679/UE du 27 avril 2016, vous bénéficiez d'un droit d'accès, de rectification, de portabilité
          et d'effacement de vos données ou encore de limitation du traitement. Vous pouvez également, pour des motifs
          légitimes, vous opposer au traitement des données vous concernant.
        </p>

        <h2>Cookies</h2>
        <p>
          Le site polyptyque.com peut être amené à vous demander l'acceptation des cookies pour des besoins de
          statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site
          que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier
          texte auquel un serveur accède pour lire et enregistrer des informations.
        </p>
      </div>
    </div>
  )
}
