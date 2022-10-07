import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component"









const PlayPage = () => {
  return ( 
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse  lg:flex lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4"> Plays in NCR Delhi</h2>
             <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/2 lg:w-3/12 my-3 flex items-center">
                <Poster
                isPlay={true}
                src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00333366-efcnaguper-portrait.jpg' 
                title="The Haunting of Hill House" subtitle="Theatre | Hindi | 12yrs + | 2hrs" />
              </div>
                <div className="w-1/2 md:w-1/2 lg:w-3/12 my-3 flex items-center">
                  <Poster
                  isPlay={true}
                  src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00333366-efcnaguper-portrait.jpg' 
                   title="The Haunting of Hill House" subtitle="Theatre | Hindi | 12yrs + | 2hrs" />
                </div> <div className="w-1/2 md:w-1/2 lg:w-3/12 my-3 flex items-center">
                        <Poster
                        isPlay={true}
                        src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00333366-efcnaguper-portrait.jpg' 
                        title="The Haunting of Hill House" subtitle="Theatre | Hindi | 12yrs + | 2hrs" />
                      </div> <div className="w-1/2 md:w-1/2 lg:w-3/12 my-3 flex items-center">
                      <Poster
                      isPlay={true}
                      src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00333366-efcnaguper-portrait.jpg' 
                      title="The Haunting of Hill House" subtitle="Theatre | Hindi | 12yrs + | 2hrs" />
                    </div> <div className="w-1/2 md:w-1/2 lg:w-3/12 my-3 flex items-center">
                      <Poster
                      isPlay={true}
                      src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00333366-efcnaguper-portrait.jpg' 
                      title="The Haunting of Hill House" subtitle="Theatre | Hindi | 12yrs + | 2hrs" />
                  </div> <div className="w-1/2 md:w-1/2 lg:w-3/12 my-3 flex items-center">
                    <Poster
                     isPlay={true}
                     src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00333366-efcnaguper-portrait.jpg' 
                     title="The Haunting of Hill House" subtitle="Theatre | Hindi | 12yrs + | 2hrs" />
                   </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4 bg-white rounded">
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
              <div>
                <PlayFilter 
                title='Date' 
                tags={["Today","Tomorrow","This Weekend"]} 
                />
              </div>
              <div>
              <PlayFilter 
              title='Language' 
              tags={["English","Hindi","Tamil"]} 
              />
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
  
};

export default DefaultLayoutHoc(PlayPage);