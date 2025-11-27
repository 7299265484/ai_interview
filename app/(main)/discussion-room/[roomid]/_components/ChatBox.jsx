import React from "react";


function ChatBox({conversation}) {
  return (
    <div>
    <div className=' h-[60vh] w-[500px] bg-secondary border rounded-4xl
             flex flex-col  relative p-4 overflow-y-scroll'>
            {/* <div> */}
                {conversation.map((item, index) => (
                    <div className={`flex ${item.role == 'user' && 'justify-end' } `} key={index}>  
                        {item.role === 'assistant' ? 
                        <h2 className="p-1 px-2 bg-primary mt-2 text-white inline-block rounded-md">{item.content}</h2> 
                        :
                       <h2 className="p-1 px-2 bg-gray-200 mt-2  inline-block rounded-md   justify-end">{item.content}</h2> }
                    </div>
                ))}
            {/* </div> */}
              
            </div>
            <h2>At the end of your conversation we will generate feedback</h2>
    </div>
  );
}
export default ChatBox;