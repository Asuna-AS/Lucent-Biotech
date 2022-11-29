#include<stdio.h>
#include<GL/gl.h>
#include<GL/glut.h>
#include<string.h>
#include<math.h>

void myInit (void)
{
	glClearColor(1.0, 1.0, 1.0, 0.0);
	glColor3f(0.0f, 0.0f, 0.0f);
	glPointSize(4.0);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0.0, 640.0, 0.0, 480.0);
}
void setPixel(GLint x, GLint y) {
  glBegin(GL_POINTS);
  glVertex2i(x,y);
  glEnd();
}
void drawLine(int x1, int y1, int x2, int y2)
{
  int dx,dy,Po;
  int k=0;
  dx=(x2-x1);
  dy=(y2-y1);
  if(dy<=dx&&dy>0)
	  {
	  dx=abs(dx);
	  dy=abs(dy);
 	  Po=(2*dy)-dx;
	  setPixel(x1,y1);
	  int xk=x1;
	  int yk=y1;
	  for(k=x1;k<x2;k++)
	  {
	    if(Po<0)
		{
			setPixel(++xk,yk);
			Po=Po+(2*dy);
		}
	    else{
			setPixel(++xk,++yk);
			Po=Po+(2*dy)-(2*dx);
		}
	  }
	}
  else if(dy>dx&&dy>0)
          {
	  dx=abs(dx);
	  dy=abs(dy);
	  Po=(2*dx)-dy;
	  setPixel(x1,y1);
	  int xk=x1; int yk=y1;
	  for(k=y1;k<y2;k++)
	  {
	    if(Po<0)
		{
			setPixel(xk,++yk);
			Po=Po+(2*dx);
		}
	    else{
			setPixel(++xk,++yk);
			Po=Po+(2*dx)-(2*dy);
		}
	  }
	}
  else if(dy>=-dx)
	 {
	  dx=abs(dx);
	  dy=abs(dy);
          Po=(2*dy)-dx;
	  setPixel(x1,y1);
	  int xk=x1;
	  int yk=y1;
	  for(k=x1;k<x2;k++)
	  {
	    if(Po<0)
		{
			setPixel(++xk,yk);
			Po=Po+(2*dy);
		}
	    else{
			setPixel(++xk,--yk);
			Po=Po+(2*dy)-(2*dx);
		}
	  }
         }
  else if(dy<-dx)
	{
	  dx=abs(dx);
	  dy=abs(dy);
 	  Po=(2*dx)-dy;
	  setPixel(x1,y1);
	  int xk=x1;
	  int yk=y1;
	  for(k=y1;k>y2;k--)
	  {
	    if(Po<0)
		{
			setPixel(xk,--yk);
			Po=Po+(2*dx);
		}
	    else{
			setPixel(++xk,--yk);
			Po=Po+(2*dx)-(2*dy);
		}
	  }
	}
  glFlush();
}
void NLNAlgo(){
    int x1,x2,y1,y2,xmax,xmin,ymax,ymin,x[2],y[2],i=0;
    printf("Enter the x1,y1 coordinates of line:\n");
    scanf("%d %d",&x1,&y1);
    printf("Enter the x2,y2 coordinates of line:\n");
    scanf("%d %d",&x2,&y2);
    printf("Enter the x coordinates of line clipping window(xmin,xmax):\n");
    scanf("%d %d",&xmin,&xmax);
    printf("Enter the y coordinates of line clipping window(ymin,ymax):\n");
    scanf("%d %d",&ymin,&ymax);
    if(!(x1<xmin && x2<xmin)&&!(x1>xmax&&x2>xmax)){
        if(!(y1<ymin && y2<ymin)&&!(y1>ymax&&y2>ymax)){
            x[0]=x1;
            y[0]=y1;
            x[1]=x2;
            y[1]=y2;
            do{
                if(x[i]<xmin){
                    x[i]=xmin;
                    y[i]=((y2-y1)/(x2-x1))*(xmin-x1)+y1;
                }
                else if(x[i]>xmax){
                    x[i]=xmax;
                    y[i]=((y2-y1)/(x2-x1))*(xmax-x1)+y1;
                }
                if(y[i]<ymin){
                    y[i]=ymin;
                    x[i]=((x2-x1)/(y2-y1))*(ymin-y1)+x1;
                }
                else if(y[i]>ymax){
                    y[i]=ymax;
                    x[i]=((x2-x1)/(y2-y1))*(ymax-y1)+x1;
                }
                i++;
            }
            while(i<1);
            if(!(x[0]<xmin&&x[1]<xmin)&&!(x[0]>xmax&&x[1]>xmax)){
                drawLine(x[0],y[0],x[1],y[1]);
            }
        }
    }
}
void myDisplay(void)
{
	glClear (GL_COLOR_BUFFER_BIT);
	glColor3f (0.0, 0.0, 0.0);
	glPointSize(1.0);

	NLNAlgo();

	glFlush ();
}

int main(int argc, char** argv)
{
    glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
	glutInitWindowSize (640, 480);
	glutInitWindowPosition (100, 150);
	glutCreateWindow ("NLN Algorithm");
	glutDisplayFunc(myDisplay);
	myInit ();
	glutMainLoop();

}
