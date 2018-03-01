import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { GridList, GridTile } from 'material-ui/GridList';

<<<<<<< HEAD
import {connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
=======
import { connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
>>>>>>> upstream/master

const styles: any = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
<<<<<<< HEAD
    justifyContent: 'space-around',
=======
    justifyContent: 'space-around'
>>>>>>> upstream/master
  },
  gridList: {
    width: 500,
    height: 450,
<<<<<<< HEAD
    overflowY: 'auto',
  },
};

// TODO: delete! It's just for demonstration purposes.
console.log('Our db: ', window['spec'].gameBuilder.gameSpecs['-KxLz3CaPRPIBc-0mRP7']);
=======
    overflowY: 'auto'
  }
};

// TODO: delete! It's just for demonstration purposes.
console.log(
  'Our db: ',
  window['spec'].gameBuilder.gameSpecs['-KxLz3CaPRPIBc-0mRP7']
);
>>>>>>> upstream/master

const images = [
  '3 Men Chess',
  'Checkers',
  'Five in a row',
  'Alquerque',
  'Chess',
  'Game_of_Y',
  'Blue Nile',
  'Dvonn',
  'Chaturanga',
<<<<<<< HEAD
  'Emergo',
=======
  'Emergo'
>>>>>>> upstream/master
];

// const tilesData = images.map((img)=>{
//   return {
//     img: require(`../images/${img}.png`),
//     title: img,
//   };
// });

/**
 * TODOS:
 * 1. Move this to components folder
 * 2. Wrap this in a redux container which gets gameslist as props with required information
 * 3. Add componentDidMount function to component
 * 4. In componentDidMount dispatch an action for fetching list which will change the store state's
 * list of games through a reducer. This will ultimately lead to a rerender of this component
 * with games. For now use the game list from hardcoded information
 * 5. onClick of any of the grid tile dispatch an action which changes the currently selected game
 * and reroutes to that game's route.
 */

<<<<<<< HEAD
const GamesListRes = (props:any) => {
  return (
    <div>
      <RaisedButton label="Default" />
      {<div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>Card games</Subheader>
          {props.tilesData.map((tile:any) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={''}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>}
=======
const GamesListRes = (props: any) => {
  return (
    <div>
      <RaisedButton label="Default" />
      {
        <div style={styles.root}>
          <GridList cellHeight={180} style={styles.gridList}>
            <Subheader>Card games</Subheader>
            {props.tilesData.map((tile: any) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={''}
                actionIcon={
                  <IconButton>
                    <StarBorder color="white" />
                  </IconButton>
                }
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>}
>>>>>>> upstream/master
    </div>
  );
};

<<<<<<< HEAD
const mapStateToPropsForGameList = (state:any) => {
=======
const mapStateToPropsForGameList = (state: any) => {
>>>>>>> upstream/master
  return {
    tilesData: state.tilesData
  };
};

const GamesList2 = connect(mapStateToPropsForGameList)(GamesListRes);

interface GLProps {
  fetchList: any;
}

// interface GLState {
// }

class GamesList extends React.Component<GLProps> {
<<<<<<< HEAD

=======
>>>>>>> upstream/master
  constructor(props: GLProps) {
    super(props);
  }

  componentDidMount() {
    const { fetchList } = this.props;
    fetchList();
  }

  render() {
<<<<<<< HEAD
    return (
      <GamesList2 />
    );
  }
}

const mapDispatherToPropsForGL = (dispatch:any) => {
  return {
    fetchList: () => dispatch(actions.fetchList())
  };
};

=======
    return <GamesList2 />;
  }
}
>>>>>>> upstream/master
const actions = {
  fetchList: () => {
    return {
      type: 'Fetch List'
    };
  }
};

<<<<<<< HEAD
connect(null, mapDispatherToPropsForGL)(GamesList);

const tilesDataReducer = (state = [], action:any) => {
  switch(action.type) {
    case 'Fetch List': {
      return images.map((img)=>{
        return {
          img: require(`../images/${img}.png`),
          title: img,
=======
const mapDispatherToPropsForGL = (dispatch: any) => {
  return {
    fetchList: () => dispatch(actions.fetchList())
  };
};

connect(null, mapDispatherToPropsForGL)(GamesList);

const tilesDataReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'Fetch List': {
      return images.map(img => {
        return {
          img: require(`../images/${img}.png`),
          title: img
>>>>>>> upstream/master
        };
      });
    }

    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  tilesData: tilesDataReducer
});

let store = createStore(reducers);

store.subscribe(() => {
  console.log('listening..');
});

export default GamesList;
