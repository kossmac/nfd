# How to get a nice monitor for my gitce configuration #

In our small test setup, we use a dedicated Debian "sqeeze" box. Plain X11 is
installed and the Google Chrome browser (it is the only one with built-in
kiosk mode).

To avoid configuration of window managers we avoid them completly. We have no
security focus on this box and this is only an example. Use it with caution.

To make initial setups and configurations, install the x11vnc package which
provides remote access to the monitor - may be required to enter username
and password initially.


## Boot ##

/etc/init.d/monitor - Will "startx" with as root.
/root/.xinitrc      - Will start "after_start" in background and fire up
                      Google Chrome in kiosk mode with our monitor page.
/root/after_start   - Will wait some seconds until Google Chrome runs. Since
                      we don't use a window manager, we use xset to
		      maximize the Google Chrome window, disable the monitors
		      power management and X's screen saver.


## Copy & Paste ##

scp /var/www/nfd/monitor/monitor \
	root@example.com:/etc/init.d/monitor
scp /var/www/nfd/monitor/xinitrc \
	root@example.com:/root/.xinitrc
scp /var/www/nfd/monitor/after_start \
	root@example.com:/root/after_start

# HOME may not be set during startup and script will assume / as home,
# so provide a link to the real startup script
ssh root@example.com "ln -s /root/.xinitrc /"