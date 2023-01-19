# Get the name argument
$name = $args[0]

# Define the template directory path
$templateDirectory = "./configs/codeBasedTools/scripts/generateController/template"

# Create the new directory path
$newDirectory = "./src/controllers/$name"

# Check if the template directory exists
if(Test-Path $templateDirectory)
{
    # Copy the template directory to the new location
    Copy-Item -Path $templateDirectory -Destination $newDirectory -Recurse

    # Get a list of the files in the new directory
    $files = Get-ChildItem -Path $newDirectory -Recurse -File

    # Rename each file with the new name
    foreach ($file in $files)
    {
        $newFileName = $file.Name -replace "template", $name
        Rename-Item -Path $file.FullName -NewName $newFileName
    }
    # Confirm that the template was copied and renamed
    Write-Host "Template was copied to '$newDirectory' and renamed with '$name'."
}
else
{
    # Confirm that the template directory does not exist
    Write-Host "Template directory does not exist."
}

