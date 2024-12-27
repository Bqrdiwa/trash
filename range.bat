@echo off
cls

type index2.html > index.html
setlocal enabledelayedexpansion


for /F "tokens=2 delims==" %%I in ('"wmic desktopmonitor where (Primary=true) get ScreenWidth /value"') do set width=%%I
set /A center=(%width% / 2) - 15


:loop
for /L %%i in (1,1,16) do (

    color %%i

    set spaces=
    for /L %%s in (1,1,%center%) do set spaces=!spaces! 
    echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN	
echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN
	echo OPEN WEBSITE AGAIN

    ping -n 1 -w 200 127.0.0.1 >nul
    cls
)

:: Loop again
goto loop
