import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./LandingPageCard.css";
import { useNavigate } from "react-router-dom";
interface LandingPageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  navPath: string;
}

const LandingPageCard: React.FC<LandingPageCardProps> = ({
  title,
  description,
  imageUrl,
  navPath,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(navPath)}
      className="landing-cards"
      sx={{ maxWidth: 320 }}
    >
      <CardMedia sx={{ height: 90 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default LandingPageCard;
