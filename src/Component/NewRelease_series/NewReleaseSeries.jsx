import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { newSeries } from "../../Function/FectchMovie/Fetch";
import { styled } from '@mui/material/styles';

const CustomAccordion = styled(Accordion)(({theme})=>({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  border: 'none',
}));

const CustomAccordionSummary = styled(AccordionSummary)(({theme})=>({
  backgroundColor: 'transparent',
}))

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: 'transparent',
}));


const NewReleaseSeries = () => {
  const [expanded,setExpanded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    newSeries().then((data) => setData(data));
  }, []);

  const handleChange =(event,isExpanded)=>{
    setExpanded(isExpanded);
  }
  return (
    <div>
      <div className="lg:ml-[100px] mt-10 lg:w-[1120px] h-auto">
        <div className="mb-5 flex justify-between">
          <p className="text-gray-200 text-xl font-semibold">
            New Release-Series
          </p>
          <p className="text-gray-400 mr-12 flex items-center gap-1 cursor-pointer" onClick={() => setExpanded(!expanded)}>
            View all <FaArrowRight />
          </p>
        </div>
        <CustomAccordion expanded={expanded} onChange={handleChange} className='mb-5'>
          <CustomAccordionSummary
          expandIcon={null}
          aria-controls="panel1a-content"
          id='panel1a-header"'>

        <div className='flex flex-wrap gap-4 items-start justify-center'>
          {data.slice(0,4).map((item) => (
            <div className="w-[256px] flex-shrink-0 ">
              <div className="w-[256px] h-[392px]">
                <img
                  className="rounded-md lg:w-full lg:h-full w-[350px] h-[290px] object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
              <div className="flex justify-between text-gray-200 mt-3">
                <p>{item.original_name}</p>
                <div className="flex gap-1">
                  <button className="w-[31px] h-[32px] bg-[#ff0000] rounded-lg">
                    HD
                  </button>
                  <button className="w-[82.3px] h-[32px] borde-[#ff0000] rounded-lg flex gap-1">
                    Season1
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
        <div className='flex flex-wrap gap-4 items-start justify-center'>
          {data.slice(4).map((item) => (
            <div className="w-[256px] flex-shrink-0 ">
              <div className="w-[256px] h-[392px]">
                <img
                  className="rounded-md lg:w-full lg:h-full w-[350px] h-[290px] object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
              <div className="flex justify-between text-gray-200 mt-3">
                <p>{item.original_name}</p>
                <div className="flex gap-1">
                  <button className="w-[31px] h-[32px] bg-[#ff0000] rounded-lg">
                    HD
                  </button>
                  <button className="w-[82.3px] h-[32px] borde-[#ff0000] rounded-lg flex gap-1">
                    Season1
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
          </CustomAccordionDetails>
          </CustomAccordion>
      </div>
    </div>
  );
};

export default NewReleaseSeries;
