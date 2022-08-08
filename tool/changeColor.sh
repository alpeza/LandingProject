grep -E -R -oh "bg-\w+-\d+" | sort | uniq | sed 's/.\///'
grep -E -R -oh "theme-\w\d" | sort | uniq | sed 's/.\///'
target_files="/Users/alvaroperis/ArchLab/landingweb/LandingProject/web/components/*"
p="/Users/alvaroperis/ArchLab/landingweb/LandingProject/web/components/"
while IFS=";" read -r c1 c2 
do
    echo "- Reemplazando $c2 por $c1"
    for f in $target_files
    do
    echo "     |_ Processing $f file..."
    sed -i'.bck'  's/'"$c2"'/'"$c1"'/g' $f
    rm "$f.bck"
    done
done < matix.csv
