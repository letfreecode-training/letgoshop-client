import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

/** custom component */
import SearchInput from './components/SearchInput/SearchInput';
import ProductCard from './components/ProductCard/ProductCard';

/** material ui */
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  rightWrapper: {
    paddingTop: 20
  }
});

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios({
      method: 'POST',
      url: 'http://localhost:4001/graphql',
      data: {
        query: '{ products { description title name price tags } } '
      }
    }).then(response => {
      const data = response.data.data;
      this.setState(_ => ({
        products: data.products
      }));
    });
  }
  render() {
    const { classes } = this.props;
    const { products } = this.state;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={2}>
            <SearchInput />
          </Grid>
          <Grid item sm={10}>
            <div className={classes.rightWrapper}>
              <Grid container spacing={0}>
                {products.map((product, index) => {
                  return (
                    <Grid key={`${product.title}-${index}`} item sm={4}>
                      <ProductCard
                        title={product.title}
                        name={product.name}
                        price={product.price}
                        tags={product.tags}
                        description={product.description}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Wrapper);
