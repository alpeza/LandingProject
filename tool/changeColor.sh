grep -E -R -oh "bg-\w+-\d+" | sort | uniq | sed 's/.\///'

while IFS=";" read -r c1 c2 
do
    echo "Reemplazando $c1 por $c2"
done < matrix.csv