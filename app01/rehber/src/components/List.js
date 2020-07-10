import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './List.css'

class Contacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
    }
    state={
        filterText:''
    }
    onChangeFilterText = (e)=>{
        this.setState({
            filterText: e.target.value
        })
    }
    render(){
        const filteredContacts = this.props.contacts.filter(
            contact=>{
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        )
        return(
            <div className={'listArea'}>
                <input
                value={this.state.filterText} 
                name={'filter'} id={'filter'} 
                placeholder={'Filter By Name Or Phone'}
                onChange={this.onChangeFilterText}/>

                <ul className={'list'}>
                    {
                        filteredContacts.map(contact =>
                            <li key={contact.phone}>
                                <span className={'name'}>{contact.name}</span>
                                <span className={'phone'}>{contact.phone}</span>
                                <span className={'clear'}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Contacts;