import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Draggable from 'react-draggable';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export const CGU = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="info" variant="outlined" onClick={handleClickOpen}>
        Lire les conditions
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Conditions générales de vente
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography fontWeight="bold" mt={2}>
              1. Acceptation des Conditions
            </Typography>

            <Typography>
              En accédant à ce site web, vous acceptez d'être lié par ces Conditions Générales d'Utilisation (CGU). Si
              vous n'acceptez pas ces CGU, veuillez ne pas utiliser ce site.
            </Typography>
            <Typography fontWeight="bold" mt={2}>
              2. Utilisation du Site
            </Typography>
            <Typography>2.1 Vous devez avoir l'âge légal pour effectuer des achats en ligne.</Typography>
            <Typography>
              2.2 Vous acceptez de fournir des informations précises, complètes et à jour lors de la création de votre
              compte et de passer des commandes.
            </Typography>
            <Typography fontWeight="bold" mt={2}>
              3. Commandes et Paiements
            </Typography>
            <Typography>3.1 Les produits affichés sur ce site sont soumis à disponibilité.</Typography>
            <Typography>
              3.2 Vous acceptez de payer le prix total des produits commandés, ainsi que les frais d'expédition
              applicables.
            </Typography>
            <Typography fontWeight="bold" mt={2}>
              4. Livraison
            </Typography>
            <Typography>
              4.1 Les délais de livraison sont estimés et peuvent varier en fonction de la destination.
            </Typography>
            <Typography>4.2 Vous êtes responsable de fournir des informations d'expédition précises.</Typography>
            <Typography fontWeight="bold" mt={2}>
              5. Retours et Remboursements
            </Typography>
            <Typography>5.1 Les retours sont acceptés conformément à notre politique de retour.</Typography>
            <Typography>5.2 Les remboursements seront effectués selon nos conditions de remboursement.</Typography>
            <Typography fontWeight="bold" mt={2}>
              6. Confidentialité
            </Typography>
            <Typography>
              6.1 Nous respectons votre vie privée. Consultez notre Politique de Confidentialité pour plus
              d'informations.
            </Typography>
            <Typography fontWeight="bold" mt={2}>
              7. Propriété Intellectuelle
            </Typography>
            <Typography>
              7.1 Tout le contenu du site est la propriété intellectuelle de notre entreprise et ne peut être utilisé
              sans autorisation.
            </Typography>
            <Typography fontWeight="bold" mt={2}>
              8. Modifications des CGU
            </Typography>
            <Typography>
              8.1 Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications prendront effet dès
              leur publication sur le site.
            </Typography>
            <Typography fontWeight="bold" mt={2}>
              9. Résiliation
            </Typography>
            <Typography>
              9.1 Nous nous réservons le droit de résilier votre compte et de refuser l'accès au site en cas de
              non-respect de ces CGU.
            </Typography>
            <Typography fontWeight="bold" mt={2}>
              10. Lois Applicables
            </Typography>
            <Typography>10.1 Ces CGU sont régies par les lois en vigueur dans votre juridiction.</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
