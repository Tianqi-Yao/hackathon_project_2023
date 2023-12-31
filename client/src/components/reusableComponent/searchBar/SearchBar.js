import "./SearchBar.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import locationIcon from "../../../assets/images/location.svg";
import searchIcon from "../../../assets/images/search.svg";
import micIcon from "../../../assets/images/mic.svg";
import smallSearchIcon from "../../../assets/images/search-small.svg";
import smallMicIcon from "../../../assets/images/mic-small.svg";
import smallLocationIcon from "../../../assets/images/location-small.svg";
import useFetchNewInfo from "../customHooks/useFetchNewInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import tempData from "./restaurantList.json";

const SearchBar = (props) => {
  const [hint, setHint] = useState("")
  const [hintFeaching, setHintFeaching] = useState(true)
  const navigate = useNavigate();
  const [analyzing, setAnalyzing] = useState(false);
  const [input, setInput] = useState("");
  const fetchData = useFetchNewInfo();

  useEffect(() => {
    const radius = 1500;
    const lat = props.userGeometry.lat
    const lng = props.userGeometry.lng
    // if (props.analyzedRestaurantData.length !== 0) {
    //   return
    // }
    // fetchData(radius, lat, lng).then((data) => {
    //   if (data === false) {
    //     setHint("Sorry, we can't find any restaurant nearby you, please try again later")
    //     return;
    //   } else {

    //     props.appendAnalyzedRestaurantList(data);
    //   }
    //   setHintFeaching(false)
    // }
    // );
    props.appendAnalyzedRestaurantList(tempData);
    console.log("12");
    axios.post('http://localhost:3005/updateRestaurantAllInfo',
      {
        analyzedRestaurantData:tempData,
      }).then((res) => {
        const tempdata = res.data.message;
        console.log("tempdata res: ", tempdata);
      }).catch((err) => {
        console.error(err);
      });

  }, []);

  const handleSearchKeyDown = async (e) => {
    if (analyzing) {
      return;
    }
    if (props.analyzedRestaurantData !==false && props.analyzedRestaurantData.length === 0) {
      return
    }
    if (e.key === "Enter") {
      console.log("pressed enter");
      setAnalyzing(cur => !cur)
      // let analyzedRestaurantData = tempData
      // let keyAttrList = keyAttrListFilterFunc(analyzedRestaurantData)
      let keyAttrList = keyAttrListFilterFunc(props.analyzedRestaurantData)
      // keyAttrList = keyAttrList.map((eachKeyAttrList,key) => {
      //   console.log("eachKeyAttrList: ", eachKeyAttrList);
      //   for (const key in eachKeyAttrList) {
      //     return JSON.stringify(eachKeyAttrList[key])
      //   }
      // })

      console.log("keyAttrList: ", keyAttrList);
      if (keyAttrList.length === 0) {
        keyAttrList = ["food", "restaurant"];
      }

      const AIScore = [];
      // for (const eachKeyAttr of keyAttrList) {
      //   for (const key in eachKeyAttr) {
      //     const AIResponse = await axios.post("http://localhost:3005/AI", {
      //       prompt: e.target.value,
      //       keyAttrList: eachKeyAttr[key],
      //     });
      //     console.log(`AIResponse-${key}: `, AIResponse.data);
      //     AIScore.push({
      //       [key]: AIResponse.data.data.reduce((acc, cur) => acc + cur, 0),
      //     });
      //   }
      // }
      console.log("AIScore: ", AIScore);
      // combine AIScore and props.meetUserDataList, just add new key object
      console.log("props.meetUserDataList: ", props.meetUserDataList);
      const combinedAIScore = [...props.meetUserDataList];
      const existingKey = props.meetUserDataList.map((eachMeetUserData) => {
        for (const key in eachMeetUserData) {
          return key;
        }
      });
      console.log("existingKey: ", existingKey);
      AIScore.forEach((eachScoreObj) => {
        for (const key in eachScoreObj) {
          console.log("key: ", key);
          if (existingKey.includes(key)) {
          if (existingKey.includes(key)) {
            //replace
            console.log("replace");
            combinedAIScore[existingKey.indexOf(key)] = eachScoreObj
          } else {
            combinedAIScore.push(eachScoreObj)
          }
        }
      }});

      // const combinedAIScore = AIScore.concat(props.meetUserDataList)
      console.log("combinedAIScore: ", combinedAIScore);
      // sort AIScore by value
      const sortedAIScore = combinedAIScore.sort((a, b) => {
        for (const key in a) {
          for (const key2 in b) {
            return b[key2] - a[key];
          }
        }
      });
      console.log("sortedAIScore: ", sortedAIScore);
      props.appendMeetUserData(sortedAIScore)
      setAnalyzing(cur => !cur)
      navigate("/map");
    }
  };

  const keyAttrListFilterFunc = (restaurantList) => {
    let out = [];
    for (const eachDetailData of restaurantList) {
      // console.log("eachDetailData: ", eachDetailData)
      // out = [...out, { ID: eachDetailData.id, categories: eachDetailData.categories.map(eachCategory => eachCategory.alias) }]
      const categories = eachDetailData.categories.map(
        (eachCategory) => eachCategory.alias
      );
      // const food = eachDetailData.menu.map(eachMenu => eachMenu.food)
      const food = [];
      const ingradients = eachDetailData.menu.map(
        (eachMenu) => eachMenu.ingradients
      );
      const content = categories.concat(food);
      const ID = eachDetailData.id;
      out = [...out, { [ID]: content }];
    }
    console.log("out: ", out);
    return out;
  };
  return (
    <div className={`search-bar${props.size ? `-${props.size}` : ""}`}>
      <input
        className={`search-bar-input${props.size ? `-${props.size}` : ""}`}
        type="text"
        placeholder="Search for anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          handleSearchKeyDown(e);
          // e.key === "Enter" && navigate("/map");
        }}
      />

      {props.size ? (
        <>
          <img
            src={smallSearchIcon}
            alt="Search Icon"
            className="search-icon-small"
          />
          <img src={smallMicIcon} alt="Mic Icon" className="mic-icon-small" />
          <img
            src={smallLocationIcon}
            alt="Location Icon"
            className="location-icon-small"
          />
        </>
      ) : (
        <>
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <img src={micIcon} alt="Mic Icon" className="mic-icon" />
          <img
            src={locationIcon}
            alt="Location Icon"
            className="location-icon"
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchInput: state.home.searchInput,
  meetUserDataList: state.home.searchedDishId,
  analyzedRestaurantData: state.home.analyzedRestaurantData,
  userGeometry: state.home.userGeometry
});

const mapDispatchToProps = (dispatch) => ({
  getSearchInput: (input) => dispatch(actions.getSearchInput(input)),
  appendMeetUserData: (payload) => dispatch(actions.appendMeetUserData(payload)),
  appendAnalyzedRestaurantList: (payload) => dispatch(actions.appendAnalyzedRestaurantList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
