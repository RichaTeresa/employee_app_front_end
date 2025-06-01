export const DetailElement=({detailName,detail}:{detailName:string,detail?:string|number})=>{
    return (
        <>
        <div className="detail-element">
          <div className="text-header">{detailName}</div>
          <div className="text">{detail}</div>
           </div>
        </>
    )
}

