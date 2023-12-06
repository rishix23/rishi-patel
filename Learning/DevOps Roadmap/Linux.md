KEY NOTES:

- BIOS - Basic Input Output System
- UEFI replaces the older BIOS
- GRUB is how the computer transitions from BIOS to the actual OS
- when you upgrade a system, the old kernel is kept as backup and you can restore it if things go wrong
- the Linux kernel is very efficient because it is modular

# Bootloaders

GRUB - Grand Unified Bootloader

# Kernal

The kernel is the core of the operating system and serves as an interface between the software applications running on a computer and the hardware resources of that computer, such as the CPU, memory, disk drives, and other peripherals.
Additionally, the kernel provides various system-level functions, such as process management, memory management, and device drivers, that are essential for the proper operation of the operating system as a whole.

## Kernal Modules

Kernel modules can provide a variety of services to the kernel, such as device drivers, network protocols, filesystems, security modules, and virtualization support. They can be loaded manually using the modprobe command or automatically at boot time using configuration files.

# Linux vs Ubuntu

Linux is the core operating system kernel, which is responsible for communication between the hardware and the software. It is the foundation on which many different Linux distributions are built.

Ubuntu, on the other hand, is a Linux distribution. It is a complete operating system that is built on top of the Linux kernel. Ubuntu includes a variety of system-level utilities, libraries, and software packages, as well as a graphical user interface.

So, while the Linux version refers to the version of the core Linux kernel, the Ubuntu version refers to the version of the complete operating system distribution that is built on top of that kernel.

# Boot Methods

PXE - Preboot Execution Environment
iPXE - uses HTTP
USB
CD
HD

# DHCP Servers

A DHCP (Dynamic Host Configuration Protocol) server is a network service that automatically assigns and manages IP (Internet Protocol) addresses, subnet masks, gateway addresses, DNS (Domain Name System) server addresses, and other network configuration parameters to devices on a TCP/IP network. DHCP simplifies the process of configuring network settings for computers and devices, making it easier to set up and manage networks, especially in large or complex environments.

PXE - Can also supply the bootfile and a TFTP file server location. Computer downloads the bootfile from the TFTP server. Bootfile is the linux kernal and downloads off the local network. HTTP is faster/more reliable.

# Boot Process

BIOS/UEFI -> GRUB -> vmlinux (base kernal one file) -> full kernal -> modules (usb, mouse, keyboard, video card, SSD) loaded into kernal

# Modprobe vs insmod

# Networking Configuration

ipconfig - shows ip address
ip addr - shows ip address
ip route - shows routing table

## DNS Commands:

- dig @server (if you want to specify the DNS server) google.com
- nslookup google.com
- host google.com

- resolv.conf
  /etc/resolv.conf is a static file used to specify DNS servers that applications on the system should use for DNS resolution. It is manually edited and typically lists DNS server IP addresses.

- resolved.conf
  resolved.conf is the configuration file for the systemd-resolved service. It allows you to configure the behavior of systemd-resolved by specifying DNS servers, DNSSEC, DNS-over-TLS, DNS-over-HTTPS, caching, and other settings.

- systemd-resolved
  systemd-resolved is a dynamic DNS resolver and caching service managed by systemd. It provides advanced DNS features, including DNS caching, DNSSEC validation, DNS-over-TLS, and DNS-over-HTTPS. It listens on 127.0.0.53 by default and dynamically manages the /etc/resolv.conf file to ensure DNS queries are routed through the local resolver.

## Hosts files:

/etc/hosts
/etc/resolv.conf
/etc/nsswitch.conf

## Network Files

/etc/netplan/

- CentOS has a network scripts folder for networking files - check this out

# Netowork Bonding

- Netowork switch vs router
  In many home and small office setups, a combination of a router and a network switch is used. The router connects the local network to the internet and handles routing between the local network and external networks. Meanwhile, the network switch is used to connect devices within the local network, allowing them to communicate with each other at high speeds.
