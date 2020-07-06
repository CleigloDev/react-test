import React, {useEffect, useState} from 'react';
import OrganizationsList from './MyList';
import Dialog from './MyDialog';
import './styles.css';

export default function Root(props) {
  const [organizations, setOrganizations] = useState([]);
  const [organizationsAll, setOrganizationsAll] = useState([]);
  const [searchInfo, setSearchInfo] = useState("");
  const [open, setOpen] = useState(false);
  const [selelectedSort, setSelelectedSort] = useState("");
  const [sortCriteria, setSortCriteria] = useState({}); 

  useEffect(() => {
    _getOrganizations();
    _getSortCriteria();
  }, []);

  const _getOrganizations = () => {
    fetch('http://localhost:8080/organizations.json')
    .then(res => res.json())
    .then(oParsedResponse => {
      setOrganizations(oParsedResponse.organizations);
      setOrganizationsAll(oParsedResponse.organizations);
    })
    .catch(err=>{
      alert("Ops! Something went wrong while trying to fetch organizations!");
    });
  };

  const _getSortCriteria = () => {
    fetch('http://localhost:8080/sortCriteria.json')
    .then(res => res.json())
    .then(oParsedResponse => {
      setSortCriteria(oParsedResponse.sortCriteria);
    })
    .catch(err=>{
      alert("Ops! Something went wrong while trying to fetch sort criteria!");
    });
  };

  const _filterOrgList = event => {
    const sSearchedInfo = event.target.value;
    setSelelectedSort("");
    setSearchInfo(sSearchedInfo);
    if(sSearchedInfo === "") return _getOrganizations();
    const aOrganizationFiltered = organizationsAll.filter((oOrganization) => {
      return oOrganization.name.toUpperCase().search(sSearchedInfo.toUpperCase()) !== -1;
    });
    setOrganizations(aOrganizationFiltered);
  };

  const _handleClickOpen = () => {
    setOpen(true);
  };

  const _deleteSort = () => {
    setSelelectedSort("");
    _getOrganizations();
  };

  const handleClose = (key) => {
    setOpen(false);
    setSelelectedSort(key);
    const oSortCriteria = sortCriteria[key];
    let organizationsSort = [];
    if(oSortCriteria.type !== "TEXT"){
      organizationsSort = organizations.sort((firstElm, secondElm) => {
        return (firstElm[oSortCriteria.field] - secondElm[oSortCriteria.field]) * (oSortCriteria.desc ? -1: 1);
      });
    }else{
      organizationsSort = organizations.sort((firstElm, secondElm) => {
        return firstElm[oSortCriteria.field].localeCompare(secondElm[oSortCriteria.field]) * (oSortCriteria.desc ? -1: 1);
      });
    }

    setOrganizations(organizationsSort);
  };

  return (
    <div class="pageContainer">
      <div class="utilitiesContainer">
        <input type="text" value={searchInfo} style={styles.searchInput} class="inputWidth"
          onChange={(event) => _filterOrgList(event)} placeholder="Search Organization"/>
        <div class="buttonContainer">
          <div class="sortCriteriaContainer">
            {selelectedSort !== "" ? <p>{sortCriteria[selelectedSort].text}</p>: ""}
            {selelectedSort !== "" ? <button onClick={_deleteSort} class="buttonDeleteSort"><p>x</p></button> : ""}
          </div>
          <button onClick={_handleClickOpen} disabled={searchInfo !== ""} class="button">
            <b>Sort List</b>
          </button>
        </div>
      </div>
      <OrganizationsList list={organizations}/>
      <Dialog selelectedSort={selelectedSort} open={open} onClose={handleClose} />
    </div>
  );
};

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



