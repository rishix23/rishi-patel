# Linux

hidden files: ls -a
filenames that have special characters like a "-": cat < -
find file with specific size: find -size 1033c (c is bytes)
find files and their details like size and permissions: ls -l

find term in file: grep "password" filename
-i - case insensitive
-n - line number term appears
-o - matches the exact part of the line that matches the pattern
-w - matches the whole word only

sort - will sort the data so duplicate lines are together
uniq - will return the unique lines use -c option for the count
strings - will extract ASCII strings from a text?

Permissions
Owner -> Group -> Everyone else
-read/write/execute or no permission with a dash

-rwxr-xr--

Process streams
In Unix-like systems, every process has three standard streams:
0: Standard input (stdin)
1: Standard output (stdout)
2: Standard error (stderr)

redirect errors (2) would be: 2>/dev/null

hexdata:
xxd - man this to learn more

Compression/Decompression
Compression

gzip filename
bzip2

Decompress/Unarchive
bzip2 -d filename.bz2
gzip -d filename.gz
tar -xf filename.tar

Establish ssl/tls connection:
openssl s_client -connect localhost:30001
do 'man openssl' to learn more

Check open ports:
nmap -p 31000-32000 localhost

Check open ports with services:
nmap -p 31000-32000 localhost -sV

Check ports which are listening:
netstat -tuln

Start a network daemon listener:
nc -lvp 12345

Connect to daemon:
nc hostname 12345

Check differences between text files:
diff file1 file2

File System
/ - The root directory of the entire filesystem hierarchy, everything is nestled under this directory.
/bin - Essential ready-to-run programs (binaries), includes the most basic commands such as ls and cp.
/boot - Contains kernel boot loader files.
/dev - Device files.
/etc - Core system configuration directory, should hold only configuration files and not any binaries.
/home - Personal directories for users, holds your documents, files, settings, etc.
/lib - Holds library files that binaries can use.
/media - Used as an attachment point for removable media like USB drives.
/mnt - Temporarily mounted filesystems.
/opt - Optional application software packages.
/proc - Information about currently running processes.
/root - The root user's home directory.
/run - Information about the running system since the last boot.
/sbin - Contains essential system binaries, usually can only be ran by root.
/srv - Site-specific data which are served by the system.
/tmp - Storage for temporary files
/usr - This is unfortunately named, most often it does not contain user files in the sense of a home folder. This is meant for user installed software and utilities, however that is not to say you can't add personal directories in there. Inside this directory are sub-directories for /usr/bin, /usr/local, etc.
/var - Variable directory, it's used for system logging, user tracking, caches, etc. Basically anything that is subject to change all the time.

Filesystem Types:
ext4 - This is the most current version of the native Linux filesystems. It is compatible with the older ext2 and ext3 versions. It supports disk volumes up to 1 exabyte and file sizes up to 16 terabytes and much more. It is the standard choice for Linux filesystems.
Btrfs - "Better or Butter FS" it is a new filesystem for Linux that comes with snapshots, incremental backups, performance increase and much more. It is widely available, but not quite stable and compatible yet.
XFS - High performance journaling file system, great for a system with large files such as a media server.
NTFS and FAT - Windows filesystems
HFS+ - Macintosh filesystem

Filesytems on system - df -T

VFS abstraction layer - It is a layer between applications and the different filesystem types
Journaling -
Partition table schemes - Master Boot Record (MBR) and GUID Partition Table (GPT).
Parition Table

Disk Partioning
parted - this is a command line tool that supports both MBR and GPT partitioning
creating a file system - sudo mkfs -t ext4 /dev/sdb2 (specify filesystem type and which partition)

Mount a filesystem:
mkdir /mydrive
sudo mount -t ext4 /dev/sdb2 /mydrive
To unmount a device from a mount point:
$ sudo umount /mydrive
or
$ sudo umount /dev/sdb2

Permanent list of filesystems that are mounted - cat /etc/fstab

# Devices

You can have many types of devices:
block devices - like filsystems, or disks
character devices - like /dev/null which sendd output to be discarded
pipes - allow inter process communication like a FIFO might appear as /dev/pipe or a similar name
sockets - used for communication between processes, sometimes across networks (when two processes communicate over TCP/IP) Example: /dev/log is a Unix domain socket used by the system logger (syslog)

Block device commands:
sudo blkid - check UUID's of connected block devices
lsblk - list currently connected block devices and thee device name and more information about their partitions
ls /dev - see all block, character, pipe, and socket devices as well as directories

Disk Commands:
Disk Free - df -h
Disk Usage - du -h

Inodes - An inode (index node) is an entry in this table and there is one for every file. It describes everything about the file, such as:
To see how many inodes are left on your system, use the command df -i
To view inode numbers run - ls -li
View info on file including inode - stat filename

REVIEW BELOW - UPDATE INFO FOR INODES (NUMBERS, LINKS, REFERENCES)

Creating a symlink - ln -s filename filenamelink
Create a hard link - ln filename filenamehardlink

# Process Utilization

ps aux - list process all, user friendly, and x for exact to display information about processes that do not have a controlling terminal
top - current view of active processes

Process Threads
Opening up Word and Chrome are 2 seperate processes. Editing and saving in Word are two parallel "lightweight processes" which are threads
ps m - view process threads where it shows process ID (PID) and a -- to indicate the threads

# Monitoring

CPU Monitoring
uptime - check load averages
Now just because you have a load average of 1 doesn't mean your computer is slogging around. Most modern machines these days have multiple cores. If you had a quad core processor (4 cores) and your load average is 1, it's really just affecting 25% of your CPU. Think of each core as a lane in traffic. You can view the amount of cores you have on your system with cat /proc/cpuinfo.

I/O Monitoring - iostat - REVIEW
Cron Jobs
crontab -l - view cron jobs in cron table
crontab -e - create a new cron job

Memory Monitoring
vmstat - list

# Logs

var/log/secure - authenticaion logs
var/log/messages - general log output of system

# Networking

Network Sharing
scp - secure copy from one host to another
rsync - only copies the differnce over and uses checksums
NFS - REVIEW
SAMBA - REVIEW

TCP/IP
Routing

Troubleshooting
ICMP - Internet Control Message Protocol - contains type, code, and checksum field
ping - used to see if a network is reachable
traceroute - hop-by-hop to next router until reaches destination router. displays all intermediate ip's and time to get there
netstat

Useful commands:
uname -a
ps aux
journalctl -u <service-name>
df -sh
du -sh
systemctl list-units --type=service

netsat -r (current routing table)
netstat -atp - all tcp connections with process id
netstat -tln - all listeing connections showing port numbers
