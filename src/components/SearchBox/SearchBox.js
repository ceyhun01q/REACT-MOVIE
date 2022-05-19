import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    
   
    render() {

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.props.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={this.props.inputVal}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.props.onInputChange}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                       
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;