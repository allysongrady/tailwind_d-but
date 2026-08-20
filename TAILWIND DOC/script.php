<?php
// Vérifiez si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Assainissement et Validation des données
    $name    = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email   = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Vérification de base
    if (!$name || !$email || !$service || !$message) {
        // Rediriger avec un message d'erreur si des champs sont manquants/invalides
        header("Location: index.html?status=error&message=Veuillez remplir tous les champs correctement.");
        exit;
    }

    // 2. Configuration de l'e-mail
    $to = "contact@votre-salon.com"; // REMPLACER PAR L'ADRESSE DU SALON
    $subject = "Nouvelle Demande de Rendez-vous Haut de Gamme - " . $name;
    
    $headers = "From: " . $email . "\r\n";
    
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Corps de l'e-mail en HTML pour un look professionnel
    $email_body = '
    <html>
    <head>
        <title>Nouvelle Réservation</title>
        <style>
            body { font-family: Georgia, serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 20px auto; border: 1px solid #ddd; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.05); }
            h2 { color: #8b5cf6; } /* Vous pouvez changer en couleur or/ambre si vous préférez */
            .detail { margin-bottom: 15px; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #8b5cf6; }
            .label { font-weight: bold; display: block; margin-bottom: 5px; color: #555; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Nouvelle Demande de Contact</h2>
            <div class="detail">
                <span class="label">Nom:</span> ' . htmlspecialchars($name) . '
            </div>
            <div class="detail">
                <span class="label">Email:</span> ' . htmlspecialchars($email) . '
            </div>
            <div class="detail">
                <span class="label">Service Souhaité:</span> ' . htmlspecialchars($service) . '
            </div>
            <div class="detail">
                <span class="label">Message:</span>
                <p>' . nl2br(htmlspecialchars($message)) . '</p>
            </div>
        </div>
    </body>
    </html>
    ';

    // 3. Envoi de l'e-mail
    if (mail($to, $subject, $email_body, $headers)) {
        // Succès
        // Rediriger l'utilisateur vers la page d'accueil avec un message de succès
        header("Location: index.html?status=success");
    } else {
        // Échec (souvent dû à une mauvaise configuration du serveur mail)
        header("Location: index.html?status=error&message=Une erreur est survenue lors de l'envoi de l'e-mail.");
    }

} else {
    // Si quelqu'un essaie d'accéder directement au script sans passer par le formulaire
    header("Location: index.html");
}
exit;


?>