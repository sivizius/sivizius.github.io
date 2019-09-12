      request.onload          =   function  ( )
      {
        if  ( request.status  === 200 )
        {
          let otters          =   request.response.pngs.concat  ( request.response.jpgs );
          let number          =   Math.floor  ( Math.random ( ) * otters.length );
          let image           =   document.createElement  ( "img"   );
          let imageParent     =   document.getElementById ( "body"  );
          console.log ( otters  [ number  ] );
          console.log ( imageParent );
          console.log ( image );
          image.alt           =   "Cute Otter Picture";
          console.log ( image );
          image.src           =   otters  [ number  ];
          console.log ( image );
          imageParent.appendChild ( image );
        }
      };
      request.send  ( );
