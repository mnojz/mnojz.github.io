#include<stdio.h>
#include<conio.h>
#include<string.h>
#include<stdlib.h>


void main(){
    int option,n,num[20],temp,r,d,s,m1[3][3],m2[3][3],m3[3][3];
    char str[30],str1[20][30],temps[30];
    float n1,n2;
    a:
    system("cls"); //alternative for clrscr function
    printf("===============================================================");
    printf("\n\t\tcomputer project by:- Manoj joshi\n");
    printf("===============================================================");
    printf("\n\n\n");
    printf("choose any of the given options.\n\n");
    printf("1. number sorting.\n");
    printf("2. string sorting.\n");
    printf("3. number palindrome checking.\n");
    printf("4. string palindrome checking.\n");
    printf("5. multiplication table generator.\n");
    printf("6. 3x3 matrix calculation.\n");
    printf("7. simple calculator.\n\n");
    printf("8. exit\n");
    printf("\nenter your choice no.");
    scanf("%d",&option);
    system("cls");

    // switching between modules according to choice ................
    switch (option)
    {
    case 1:
        goto aa;
        break;
    
    case 2:
        goto ab;
        break;

    case 3:
        goto ac;
        break;

    case 4:
        goto ad;
        break;

    case 5:
        goto ae;
        break;

    case 6:
        goto af;
        break;

    case 7:
        goto ag;
        break;

    case 8:
        goto ah;
        break;

    default:
        goto aa;
        break;
    }


    // modules of programs ......................
    aa: 
    system("cls");
    printf("=========================================================");
    printf("\n\t\tnumber sorting\n");
    printf("=========================================================");
    printf("\n\nhow many numbers do you want to enter, maximum 20: \n\n");
    scanf("%d",&n);
    for (int i = 0; i < n; i++)
    {
        printf("enter no. %d :", i+1);
        scanf("%d",&num[i]);
    }
    for (int i = 0; i < n; i++){
    for (int j = i+1; j < n; j++){
        if (num[i]>num[j]){
                temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }            
        }        
    }
    printf("numbers in assending order: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d\t",num[i]);
    }
    printf("\n");
    getch();
    goto a;

    ab:
    system("cls");
    printf("=============================================================");
    printf("\n\t\tstring sorting\n");
    printf("=============================================================");
    printf("\n\nhow many strings do you want to enter, maximum 20 of length 30: \n\n");
    scanf("%d",&n);
    for (int i = 0; i < n; i++)
    {        
        printf("enter string. %d :", i+1);
        scanf("%s",&str1[i]);        
    }

    for (int i = 0; i < n; i++){
    for (int j = i+1; j < n; j++){
        if (strcmp(str1[i],str1[j])>0){
                strcpy(temps,str1[i]);
                strcpy(str1[i],str1[j]);
                strcpy(str1[j],temps);
            }            
        }        
    }

    printf("strings in assending order: \n\n");
    for (int i = 0; i < n; i++)
    {
        printf("%s\t",str1[i]);
    }
    printf("\n");
    getch();
    goto a;

    ac:
    system("cls");
    printf("============================================================");
    printf("\n\t\tnumber palindrome checking\n");
    printf("============================================================");
    printf("\n\nenter any number: ");
    scanf("%d",&n);
    d = n;
    while (n!=0)
    {
        r = n%10;
        s = s*10+r;
        n = n/10;
    }

    if (s==d)
    {
        printf("\n\nnumber is palindrome.\n\n");
    }
    else{
        printf("\n\nnumber is not palindrome.\n\n");
    }
    getch();
    goto a;

    ad:
    system("cls");
    printf("======================================================");
    printf("\n\t\tstring palindrome checking\n");
    printf("======================================================");
    printf("\n\nenter any string maximum 30 character long:\n");
    scanf("%s",str);
    strcpy(temps,str);
    
    if (strcmp(temps,strrev(str))==0)
    {
        printf("\n\nthe string is palindrome.\n\n");
    }
    else{
        printf("\n\nthe string is not palindrome.\n\n");
    }
    
    getch();
    goto a;

    ae:
    system("cls");
    printf("=====================================================");
    printf("\n\t\tmultiplication table\n");
    printf("=====================================================");
    printf("\n\nenter any number: \n");
    scanf("%d",&n);
    printf("\n");
    for (int i = 1; i <= 10; i++)
    {
        printf("%d x %d = %d\n", n,i,n*i);
    }
    getch();
    goto a;

    af:
    system("cls");
    printf("========================================================");
    printf("\n\t\tmatrix calculation\n");
    printf("========================================================");
    printf("\n\n1. matrix addition.\n");
    printf("2. matrix subtraction.\n");
    printf("3. matrix multiplication.\n\n");
    printf("4. exit\n\n");
    printf("choose any 1 option: ");
    scanf("%d",&n);
    switch (n)
    {
    case 1:
        system("cls");
        printf("========================================================");
        printf("\n\t\tmatrix addition\n");
        printf("========================================================");        
        printf("\n\nenter first 3x3 matrix\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                scanf("%d",&m1[i][j]);
            }            
        }
        printf("\n\nenter second 3x3 matrix\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                scanf("%d",&m2[i][j]);
            }            
        }

        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                m3[i][j]=m1[i][j]+m2[i][j];
            }            
        }

        printf("\nreasultant 3x3 matrix\n\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                printf("%d\t", m3[i][j]);
            }
            printf("\n");
        }  
        getch();
        goto af;      
        break;

    case 2:
        system("cls");
        printf("========================================================");
        printf("\n\t\tmatrix subtraction\n");
        printf("========================================================");        
        printf("\n\nenter first 3x3 matrix\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                scanf("%d",&m1[i][j]);
            }            
        }
        printf("\n\nenter second 3x3 matrix\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                scanf("%d",&m2[i][j]);
            }            
        }

        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                m3[i][j]=m1[i][j]-m2[i][j];
            }            
        }

        printf("\nreasultant 3x3 matrix\n\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                printf("%d\t", m3[i][j]);
            }
            printf("\n");
        }  
        getch();
        goto af;      
        break;

    case 3:
        system("cls");
        printf("========================================================");
        printf("\n\t\tmatrix multiplication\n");
        printf("========================================================");        
        printf("\n\nenter first 3x3 matrix\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                scanf("%d",&m1[i][j]);
            }            
        }
        printf("\n\nenter second 3x3 matrix\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                scanf("%d",&m2[i][j]);
            }            
        }

        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            m3[i][j]=0;
        for (int k = 0; k < 3; k++){
                m3[i][j]+=m1[i][k]*m2[k][j];                
            }
            }            
        }

        printf("\nreasultant 3x3 matrix\n\n");
        for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
                printf("%d\t", m3[i][j]);
            }
            printf("\n");
        }  
        getch();
        goto af;      
        break;
    case 4:
        system("cls");
        goto a;
    default:
        system("cls");
        goto af;
        break;
    }


    ag:
    system("cls");    
    printf("======================================================");
    printf("\n\t\tsimple calculator\n");
    printf("======================================================");
    printf("\n\n1. addition.\n");
    printf("2. subtraction.\n");
    printf("3. multiplication.\n");
    printf("4. division.\n\n");
    printf("5. exit");
    printf("\n\nchoose any 1 option: ");
    scanf("%d",&n);
    switch (n)
    {
    case 1:
        printf("\nenter first number: ");
        scanf("%f",&n1);
        printf("\nenter second number: ");
        scanf("%f",&n2);
        printf("\n\nsum: %f\n",n1+n2);
        getch();
        goto ag;
        break;

    case 2:
        printf("\nenter first number: ");
        scanf("%f",&n1);
        printf("\nenter second number: ");
        scanf("%f",&n2);
        printf("\n\ndifference: %f\n",n1-n2);
        getch();
        goto ag;
        break;

    case 3:
        printf("\nenter first number: ");
        scanf("%f",&n1);
        printf("\nenter second number: ");
        scanf("%f",&n2);
        printf("\n\nproduct: %f\n",n1*n2);
        getch();
        goto ag;
        break;
    case 4:
        printf("\nenter first number: ");
        scanf("%f",&n1);
        printf("\nenter second number: ");
        scanf("%f",&n2);
        printf("\n\ndivision: %f\n",n1/n2);
        getch();
        goto ag;
        break;
    case 5:
        goto a;
        break;

    default:
        goto ag;
        break;
    }

    ah: //this is the end of program.............

}