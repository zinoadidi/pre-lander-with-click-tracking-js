
    const offerBaseUrl = "https://track.ultravpn.com/5d02892a4faea/click/";
    
    const getClickIdFromUrl = function (url) {
        const clickId = url.split("clickid=")[1];
    
        return clickId && clickId.split("&").length > 1 ?
            clickId.split("&")[0] : clickId;
    }
    
    const attachClickIdToOfferLink = clickId => {
        document.querySelectorAll(".btn").forEach(currentLink => {
            currentLink.setAttribute(
                "href",
                offerBaseUrl+(clickId || "")
            );
        })
    }
    
    attachClickIdToOfferLink(
        getClickIdFromUrl(document.location.search)
    );
