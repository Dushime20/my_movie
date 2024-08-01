import React, { useEffect, useState } from "react";
import { fetchMovie } from "../../Function/FectchMovie/Fetch";
import { FaArrowRight } from "react-icons/fa6";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ff0000", // Custom background color
  color: "#fff", // Custom text color
  "&:hover": {
    backgroundColor: "#cc0000", // Custom hover background color
  },
}));

const Trending = () => {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetchMovie().then((data) => setData(data));
  }, []);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <div>
      <div className="lg:ml-[100px] mt-10 lg:w-[1120px] h-auto">
        <div className="mb-5 flex justify-between">
          <p className="text-gray-200 text-xl font-semibold">Trending</p>
          <p
            className="text-gray-400 mr-12 flex items-center gap-1 cursor-pointer"
            onClick={() => setExpanded(!expanded)}>
            View all <FaArrowRight />
          </p>
        </div>

        <CustomAccordion
          expanded={expanded}
          onChange={handleChange}
          className="mb-5">
          <CustomAccordionSummary
            expandIcon={null}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <div className="flex flex-wrap gap-4">
              {data.slice(0, 3).map((item, index) => (
                <NavLink to={`/details/${item.id}`}>
                  <div key={index} className="lg:w-[352px] flex-shrink-0">
                    <div className="lg:w-[352px] h-[293px]">
                      <img
                        className="rounded-md lg:w-full lg:h-full w-[350px] h-[290px] object-cover"
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.original_title}
                      />
                    </div>
                    <div className="flex justify-between text-gray-200 pt-2">
                      <p className="w-[120px] h-[35px]">
                        {item.original_title}
                      </p>
                      <div className="flex gap-1">
                        <CustomButton variant="contained">Action</CustomButton>
                        <CustomButton variant="contained">Comedy</CustomButton>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <div className="flex flex-wrap gap-4 items-start justify-center">
              {data.slice(3).map((item, index) => (
                <NavLink to={`/details/${item.id}`}>
                  <div key={index} className="lg:w-[352px] flex-shrink-0">
                    <div className="lg:w-[352px] h-[293px]">
                      <img
                        className="rounded-md lg:w-full lg:h-full w-[350px] h-[290px] object-cover"
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.original_title}
                      />
                    </div>
                    <div className="flex justify-between text-gray-200 pt-2">
                      <p className="w-[120px] h-[35px]">
                        {item.original_title}
                      </p>
                      <div className="flex gap-1">
                        <CustomButton variant="contained">Action</CustomButton>
                        <CustomButton variant="contained">Comedy</CustomButton>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>
      </div>
    </div>
  );
};

export default Trending;
