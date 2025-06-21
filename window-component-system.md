>[!NOTE]
> # BRAINSTORM TIME
> To make the windows stack on top of each other, I need to have a list of the visible windows in the page.
> ```js
> var windows = document.querySelectorAll(".window")
> var visibleWin = []
> 
> for (var i = 0; i < windows.length; i++) {
>   if (windows[i].style.visibility === "visible") visible.append(windows[i])
> }
> ```
> If I click a window, it should raize it's zIndex to 1, but if a windows is already zIndex + 1, it goes down 1
> When clicking, the zIndex of the current window turns into 3, and any others go down
> ```js
> element.style.zIndex = windows.length
> for (var i = 0; i < windows.length-1; i++) {
>   if (window[i].style.zIndex == window[i].style.zIndex+1) {
>     window[i].style.zIndex -= 1
>   }
> }
> ```