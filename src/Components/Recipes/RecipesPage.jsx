import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useSelector } from 'react-redux';
import {
    Configure,
    InstantSearch,
    Hits,
    connectHits,
    Highlight,
    connectStateResults
} from 'react-instantsearch-dom';
import { CustomHitsRecipe } from '../Searchpage/Hits';

const RecipesPage = () => {
    const searchClient = algoliasearch(window.appID, window.key);
    const { query } = useSelector(state => state.getQuery);
    return (
        <div className="recipes-page">
            <h3>Recipe categories</h3>
            {query ? <p>For {query}</p> : ''}
            <InstantSearch
                indexName={window.recipeIndex}
                searchClient={searchClient}
            >
                <Configure
                    enablePersonalization={true}
                    hitsPerPage={20}
                    query={query}
                />
                <CustomHitsRecipe />
            </InstantSearch>
        </div>
    );
};

export default RecipesPage;
