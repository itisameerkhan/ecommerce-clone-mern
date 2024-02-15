import './NewCollections.scss';
import collections from '../assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1 className="sub-heading">New Collections</h1>
        <div className="popular-items">
            {collections.map((data, index) => (
                <Item key={index} data={data} />
            ))}
        </div>
    </div>
  )
}

export default NewCollections;