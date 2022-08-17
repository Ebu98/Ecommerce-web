import React from "react";
import {connect} from 'react-redux';
import { selectDirectorySections } from "../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../Menu-item/Menu-item";
import "./Directory.style.scss";

const Directory=({ sections }) => {
  
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
  const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  })

export default connect(mapStateToProps)(Directory);

// const Directory = ({ sections }) => (
//   <div className='directory-menu'>
//     {sections.map(({ id, ...otherSectionProps }) => (
//       <MenuItem key={id} {...otherSectionProps} />
//     ))}
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections
// });

// export default connect(mapStateToProps)(Directory);

