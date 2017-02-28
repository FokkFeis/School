Import-CSV c:\users.csv -Encoding Default | foreach-object {
New-ADUser -Name $_.Name -UserPrincipalName $($_.username + "@" + $env:USERDOMAIN) -SamAccountName $_.username -Department $_.Department -AccountPassword (ConvertTo-SecureString "Pass.123" -AsPlainText -force) -Enabled $True -PasswordNeverExpires $True -PassThru}
