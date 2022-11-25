import React, { Component } from 'react';
import styles from './NameList.module.css';

interface NameListProps { }
interface NameListState {
  people: { id: number, name: string }[]
}

class NameList extends Component<NameListProps, NameListState> {
  state: Readonly<NameListState> = {
    people: [{ id: 1, name: 'vinod' }, { id: 2, name: 'sunil' }, { id: 3, name: 'anil' }]
  }

  sortPeopleHandler = () => {
    this.setState(
      (currentState) => {
        return {
          people: currentState.people.sort(
            (first, next) => {
              return first.name.localeCompare(next.name)
            }
          )
        }
      }
    )
  }
  render(): React.ReactNode {
    return (
      <div className={styles.NameList} data-testid="NameList">
        <ul>
          {
            this.state.people.map(
              (p) => {
                return <li key={p.id}>{p.name}</li>
              }
            )
          }
        </ul>
        <br />
        <br />
        <button type='button' onClick={this.sortPeopleHandler}>Sort</button>
      </div>
    )
  }
}

export default NameList;
/*
interface M1 {
  id: number;
  name: string;
}
interface M2 {
  id: number;
  name: string;
  info: string;
}
interface Aggregate {
  id: number;
  first: M1;
  second: M2
}
*/