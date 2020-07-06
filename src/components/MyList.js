import React from 'react';
import './styles.css';

const styles = {
  textContainer: {
    marginTop: "0.5rem", 
    marginLeft: "1rem", 
    flexWrap: 'wrap', 
    width: "100%"
  },
  marginBottom: {
    marginBottom: "1rem"
  },
  searchInput: {
    height: "2rem", 
    borderRadius: "15px", 
    padding: "0.5rem", 
    borderWidth: "1px"
  }
};

export default function MyList(props) {

  const _formatDate = timeStamp => {
    return new Date(timeStamp).toLocaleDateString();
  };

  const _imageVenture = sImageUrl => {
    return {
      backgroundImage: `url(${sImageUrl}`,
      backgroundRepeat: 'no-repeat', 
      width: "130", 
      height: "auto", 
      backgroundSize:'contain',
      backgroundPosition: 'center'
    };
  };

  const organizationList = ({ list }) => (
    <div class="listContainer">
      {list.map(item => (
        <div key={item.id} class="listElement">
          <div class="flexContainer" >
            <div style={_imageVenture(item.image_url)}/>
            <div style={styles.textContainer}>
              <div style={styles.marginBottom}>
                <div>
                  <b>Org. Name:</b>
                </div>
                <div>
                  <p>{item.name}</p>
                </div>
              </div>
              <div style={styles.marginBottom}>
                <div>
                    <b>Founding Date:</b>
                </div>
                <div>
                  <p>{_formatDate(item.founded_on)}</p>
                </div>
              </div>
              <div>
                <div>
                    <b>Short Description:</b>
                </div>
                <div>
                    <p>{item.short_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return organizationList(props);
};



