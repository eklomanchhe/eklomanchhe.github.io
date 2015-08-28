#!/bin/bash
dpkg-deb -bZgzip projects/meronepal debs
dpkg-deb -bZgzip projects/merodialer debs
# dpkg-deb -bZgzip projects/<project name> <output folder>
