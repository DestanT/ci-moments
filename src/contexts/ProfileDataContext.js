import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileDataContext = () => useContext(ProfileDataContext);
export const useSetProfileDataContext = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post('/followers/', {
        followed: clickedProfile.id
      });

      setProfileData(prevState => ({
        ...prevState,
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map(profile => {
            return profile.id === clickedProfile.id
            ? // This is the profile I clicked on,
              // update its followers count and set its following id
              {}
            : profile.is_owner
            ? // This is the profile of the logged in user
              // update its following count
              {}
            : // this is not the profile the user clicked on or the profile
              // the user owns, so just return it unchanged
              {};
          })
        }
      }))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          '/profiles/?ordering=-followers_count'
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{ setProfileData, handleFollow }}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};