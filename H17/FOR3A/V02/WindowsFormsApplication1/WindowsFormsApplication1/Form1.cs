using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        Graphics surface1;
        Pen pen1;
        SolidBrush brush1;

        public Form1()
        {
            InitializeComponent(); 
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            //Create surface
            surface1 = this.CreateGraphics();

            //Create the blue 1.0 thick pen
            pen1 = new Pen(Color.Blue, 1.0f);

            //Create the green brush
            brush1 = new SolidBrush(Color.Green);

            // Draw a line, put in the point(0,0) and (100,100)
            surface1.DrawLine(pen1, 0, 0, 100, 100);

            // Declare the points x y 
            Point pt1 = new Point(100, 100);
            Point pt2 = new Point(200, 100);
            Point pt3 = new Point(200, 200);
            Point pt4 = new Point(100, 200);
            // Drawline using points
            surface1.DrawLine(pen1, pt1, pt3);
            Point[] points = { pt1, pt2, pt3, pt4, pt1 };
            surface1.DrawLines(pen1, points);

            // Define the rectangle x   y   height  width
            Rectangle rect1 = new Rectangle(200, 200, 50, 50);
            // Draw Rectangle
            surface1.DrawRectangle(pen1, rect1);

            // Fill rectangle
            surface1.FillRectangle(brush1, rect1);

            // Drawlines can draw shapes that are not closed
            // DrawPolygon only draw shapes that are closed
            Point pt5 = new Point(11, 28);
            Point pt6 = new Point(7, 15);
            Point pt7 = new Point(18, 7);
            Point pt8 = new Point(29, 15);
            Point pt9 = new Point(25, 28);
            Point[] polyPoints = { pt5, pt6, pt7, pt8, pt9 };
            surface1.DrawPolygon(pen1, polyPoints);
            surface1.FillPolygon(brush1, polyPoints);

            // Fonts
            Font drawFont = new Font("Arial", 20);
            //                  string    font      brush   x       y
            surface1.DrawString("Hello!", drawFont, brush1, 200.0f, 100.0f);
        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            surface1.DrawLine(pen1, e.X + 5, e.Y + 5, e.X - 5, e.Y - 5);
            surface1.DrawLine(pen1, e.X - 5, e.Y + 5, e.X + 5, e.Y - 5);
        }
    }
}
