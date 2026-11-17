#!/usr/bin/env bash
# Simple interest calculator.
# Based on the IBM Developer Skills Network learning exercise.
# Simple interest = principal * annual rate (%) * time in years / 100

echo "Enter the principal:"
read -r p
echo "Enter rate of interest per year (%):"
read -r r
echo "Enter time period in years:"
read -r t

if ! [[ "$p" =~ ^[0-9]+([.][0-9]+)?$ && "$r" =~ ^[0-9]+([.][0-9]+)?$ && "$t" =~ ^[0-9]+([.][0-9]+)?$ ]]; then
    echo "Error: enter non-negative numbers for principal, rate, and time." >&2
    exit 1
fi

awk -v p="$p" -v r="$r" -v t="$t" 'BEGIN { printf "The simple interest is: %.2f\n", p*r*t/100 }'
