import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [rate, setRate] = useState({});
  const [faqs, setFaqs] = useState();
  const [featuredBlogs, setFeaturedBlogs] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://vitalswap.com/test/api_v2/utils/webHome"
        );

        const { rate, featuredBlogPosts, faq } = data;

        setRate(rate);
        setFaqs(faq);
        setFeaturedBlogs(featuredBlogPosts);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <AppContext.Provider value={{ rate, faqs, featuredBlogs }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
