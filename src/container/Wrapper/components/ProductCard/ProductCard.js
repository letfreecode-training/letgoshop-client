import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
});

const ProductCard = props => {
  return (
    <Card className={props.classes.card}>
      <CardMedia
        className={props.classes.media}
        image="http://pic.pimg.tw/mascottofu/746a83e02ad6a7841ef8c3a4b5d5bf0d.jpg"
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.name}
          <span> $ {props.price} NT</span>
        </Typography>
        <Typography component="h3">
          {props.description}
          <br />
          <br />
          <div>
            {props.tags.map((tag, index) => {
              return <span key={`${tag}-${index}`}>#{tag} </span>;
            })}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          購買
        </Button>
        <Button size="small">加入購物車</Button>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  tags: PropTypes.array,
  description: PropTypes.string
};

export default withStyles(styles)(ProductCard);
