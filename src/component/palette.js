import React from "react";
function Pallete({color, singleElement,setColors, colors}) {    
    return (
        <div style={{ width: "100%", height: "100%", backgroundColor: color, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <div onClick={lockTheColor} style={{ textAlign: "center" }}>
                    <button style={{ padding: "10px" }}>{singleElement.lock ? 'Unlock' : 'Lock'}</button>
                </div>
                <p style={{ fontSize: "50px", padding: "10px", textAlign: "center" }}>{color}</p>
            </div>
        </div>
    )
    function lockTheColor() {
        let changeLock = colors.map((element)=>{
            return {
                palleteColor: element.palleteColor.map((element)=>{
                    if(singleElement.id === element.id) {
                        return {...element, lock: !element.lock}
                    }
                    else {
                        return element
                    }
                })
            }
        })
        setColors(changeLock)
    }
}

export default Pallete